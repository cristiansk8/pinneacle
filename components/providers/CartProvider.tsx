'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import {
  addToCart as apiAddToCart,
  updateCartItem,
  removeCartItem,
  clearCart as apiClearCart,
  getCartItemCount,
  Cart,
  CartItem
} from '@/lib/woocommerce/cart';

interface CartContextType {
  cart: Cart | null;
  itemCount: number;
  isLoading: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (productId: number | string, quantity?: number, variationId?: number | string) => Promise<boolean>;
  updateQuantity: (key: string, quantity: number) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // NO cargar carrito al montar - WooCommerce GraphQL no tiene persistencia en cliente
  // El carrito se llena solo cuando se agregan productos

  const addToCart = useCallback(async (
    productId: number | string,
    quantity: number = 1,
    variationId?: number | string
  ): Promise<boolean> => {
    try {
      setIsLoading(true);
      const result = await apiAddToCart(productId, quantity, variationId);

      if (result.success) {
        setCart(result.cart || null);
        openCart(); // Abrir el carrito al agregar
        return true;
      }

      // Mostrar error
      if (result.error) {
        alert(`Error: ${result.error}`);
      }
      return false;
    } catch (error: any) {
      console.error('Error adding to cart:', error);
      alert('Error al agregar al carrito');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateQuantity = useCallback(async (key: string, quantity: number) => {
    if (quantity < 1) {
      await removeItem(key);
      return;
    }

    try {
      setIsLoading(true);
      const result = await updateCartItem(key, quantity);

      if (result.success && result.cart) {
        setCart(result.cart);
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeItem = useCallback(async (key: string) => {
    try {
      setIsLoading(true);
      const result = await removeCartItem(key);

      if (result.success && result.cart) {
        setCart(result.cart);
      }
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearCart = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await apiClearCart();

      if (result.success) {
        setCart(null);
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshCart = useCallback(async () => {
    try {
      setIsLoading(true);
      // Nota: WooCommerce GraphQL no tiene persistencia en cliente
      // Esta función es principalmente para compatibilidad futura
      setCart(null); // Resetear por ahora
    } catch (error) {
      console.error('Error refreshing cart:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  // Calcular itemCount con useMemo para evitar recálculos en cada render
  const itemCount = useMemo(() => getCartItemCount(cart), [cart]);

  const value: CartContextType = {
    cart,
    itemCount,
    isLoading,
    isOpen,
    openCart,
    closeCart,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    refreshCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
