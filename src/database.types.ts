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
      categories: {
        Row: {
          created_at: string
          description: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      category_hotspots: {
        Row: {
          categoryId: string | null
          created_at: string
          hotspotId: string | null
          id: string
        }
        Insert: {
          categoryId?: string | null
          created_at?: string
          hotspotId?: string | null
          id?: string
        }
        Update: {
          categoryId?: string | null
          created_at?: string
          hotspotId?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "category_hotspots_categoryId_fkey"
            columns: ["categoryId"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_hotspots_hotspotId_fkey"
            columns: ["hotspotId"]
            isOneToOne: false
            referencedRelation: "hotspots"
            referencedColumns: ["id"]
          },
        ]
      }
      hotspots: {
        Row: {
          building: string | null
          CEP: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          profileId: string | null
          street: string | null
        }
        Insert: {
          building?: string | null
          CEP?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          profileId?: string | null
          street?: string | null
        }
        Update: {
          building?: string | null
          CEP?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          profileId?: string | null
          street?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hotspots_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      items: {
        Row: {
          created_at: string
          description: string | null
          hotspotId: string | null
          id: number
          name: string
          quantity: number
          type: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          hotspotId?: string | null
          id?: number
          name: string
          quantity?: number
          type: string
        }
        Update: {
          created_at?: string
          description?: string | null
          hotspotId?: string | null
          id?: number
          name?: string
          quantity?: number
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "items_hotspotId_fkey"
            columns: ["hotspotId"]
            isOneToOne: false
            referencedRelation: "hotspots"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          city: string | null
          cnpj: string | null
          cpf: string | null
          full_name: string | null
          id: string
          state: string | null
          type: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          city?: string | null
          cnpj?: string | null
          cpf?: string | null
          full_name?: string | null
          id: string
          state?: string | null
          type?: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          city?: string | null
          cnpj?: string | null
          cpf?: string | null
          full_name?: string | null
          id?: string
          state?: string | null
          type?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      rating: {
        Row: {
          comment: string | null
          created_at: string
          hotspotId: string | null
          id: number
          score: number
        }
        Insert: {
          comment?: string | null
          created_at?: string
          hotspotId?: string | null
          id?: number
          score: number
        }
        Update: {
          comment?: string | null
          created_at?: string
          hotspotId?: string | null
          id?: number
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "rating_hotspotId_fkey"
            columns: ["hotspotId"]
            isOneToOne: false
            referencedRelation: "hotspots"
            referencedColumns: ["id"]
          },
        ]
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
