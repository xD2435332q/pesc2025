export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cart_items: {
        Row: {
          added_at: string | null
          id: number
          product_id: number
          quantity: number | null
          user_id: number
        }
        Insert: {
          added_at?: string | null
          id?: number
          product_id: number
          quantity?: number | null
          user_id: number
        }
        Update: {
          added_at?: string | null
          id?: number
          product_id?: number
          quantity?: number | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_cart_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_cart_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      excursion_images: {
        Row: {
          created_at: string | null
          excursion_id: number
          id: number
          image_url: string
        }
        Insert: {
          created_at?: string | null
          excursion_id: number
          id?: number
          image_url: string
        }
        Update: {
          created_at?: string | null
          excursion_id?: number
          id?: number
          image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_excursion_image"
            columns: ["excursion_id"]
            isOneToOne: false
            referencedRelation: "excursions"
            referencedColumns: ["id"]
          },
        ]
      }
      excursion_reservations: {
        Row: {
          booking_date: string
          created_at: string | null
          excursion_id: number
          id: number
          number_of_people: number
          status: string
          total_price: number
          user_id: number
        }
        Insert: {
          booking_date: string
          created_at?: string | null
          excursion_id: number
          id?: number
          number_of_people: number
          status: string
          total_price: number
          user_id: number
        }
        Update: {
          booking_date?: string
          created_at?: string | null
          excursion_id?: number
          id?: number
          number_of_people?: number
          status?: string
          total_price?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_excursion_reservation_excursion"
            columns: ["excursion_id"]
            isOneToOne: false
            referencedRelation: "excursions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_excursion_reservation_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      excursions: {
        Row: {
          created_at: string | null
          description: string | null
          duration: string | null
          id: number
          location: string | null
          name: string
          price: number
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration?: string | null
          id?: number
          location?: string | null
          name: string
          price: number
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration?: string | null
          id?: number
          location?: string | null
          name?: string
          price?: number
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      house_images: {
        Row: {
          created_at: string | null
          house_id: number
          id: number
          image_url: string
        }
        Insert: {
          created_at?: string | null
          house_id: number
          id?: number
          image_url: string
        }
        Update: {
          created_at?: string | null
          house_id?: number
          id?: number
          image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_house_image"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
        ]
      }
      house_reservations: {
        Row: {
          created_at: string | null
          end_date: string
          house_id: number
          id: number
          start_date: string
          status: string
          total_price: number
          user_id: number
        }
        Insert: {
          created_at?: string | null
          end_date: string
          house_id: number
          id?: number
          start_date: string
          status: string
          total_price: number
          user_id: number
        }
        Update: {
          created_at?: string | null
          end_date?: string
          house_id?: number
          id?: number
          start_date?: string
          status?: string
          total_price?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_house_reservation_house"
            columns: ["house_id"]
            isOneToOne: false
            referencedRelation: "houses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_house_reservation_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      houses: {
        Row: {
          address: string | null
          capacity: number | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          price_per_night: number
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          address?: string | null
          capacity?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          price_per_night: number
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          address?: string | null
          capacity?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          price_per_night?: number
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: number
          order_id: number
          price: number
          product_id: number
          quantity: number
        }
        Insert: {
          id?: number
          order_id: number
          price: number
          product_id: number
          quantity: number
        }
        Update: {
          id?: number
          order_id?: number
          price?: number
          product_id?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_order_item_order"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_order_item_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          id: number
          order_date: string | null
          status: string
          total_amount: number
          user_id: number
        }
        Insert: {
          id?: number
          order_date?: string | null
          status: string
          total_amount: number
          user_id: number
        }
        Update: {
          id?: number
          order_date?: string | null
          status?: string
          total_amount?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_order_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          id: number
          order_id: number | null
          payment_date: string | null
          payment_method: string | null
          reservation_id: number | null
          status: string | null
        }
        Insert: {
          amount: number
          id?: number
          order_id?: number | null
          payment_date?: string | null
          payment_method?: string | null
          reservation_id?: number | null
          status?: string | null
        }
        Update: {
          amount?: number
          id?: number
          order_id?: number | null
          payment_date?: string | null
          payment_method?: string | null
          reservation_id?: number | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_payment_order"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      product_reviews: {
        Row: {
          created_at: string | null
          id: number
          product_id: number
          rating: number | null
          review_text: string | null
          user_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_id: number
          rating?: number | null
          review_text?: string | null
          user_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          product_id?: number
          rating?: number | null
          review_text?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_review_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_review_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          name: string
          price: number
          stock: number | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          name: string
          price: number
          stock?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string
          price?: number
          stock?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      promotions: {
        Row: {
          discount_percentage: number
          end_date: string
          id: number
          product_id: number
          start_date: string
        }
        Insert: {
          discount_percentage: number
          end_date: string
          id?: number
          product_id: number
          start_date: string
        }
        Update: {
          discount_percentage?: number
          end_date?: string
          id?: number
          product_id?: number
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_promotion_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: number
          name: string
          password: string
          updated_at: string | null
          user_type: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          name: string
          password: string
          updated_at?: string | null
          user_type: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          name?: string
          password?: string
          updated_at?: string | null
          user_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
