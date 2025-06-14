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
      appointments: {
        Row: {
          appointment_date: string
          appointment_time: string
          appointment_type: string
          created_at: string | null
          doctor_id: string | null
          id: string
          notes: string | null
          patient_id: string | null
          queue_number: number | null
          status: string
          updated_at: string | null
        }
        Insert: {
          appointment_date: string
          appointment_time: string
          appointment_type?: string
          created_at?: string | null
          doctor_id?: string | null
          id?: string
          notes?: string | null
          patient_id?: string | null
          queue_number?: number | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          appointment_type?: string
          created_at?: string | null
          doctor_id?: string | null
          id?: string
          notes?: string | null
          patient_id?: string | null
          queue_number?: number | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      emergency_contacts: {
        Row: {
          area_coverage: string | null
          availability: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          phone_number: string
          service_name: string
          service_type: string
        }
        Insert: {
          area_coverage?: string | null
          availability?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          phone_number: string
          service_name: string
          service_type: string
        }
        Update: {
          area_coverage?: string | null
          availability?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          phone_number?: string
          service_name?: string
          service_type?: string
        }
        Relationships: []
      }
      health_records: {
        Row: {
          chief_complaint: string | null
          created_at: string | null
          diagnosis: string | null
          doctor_id: string | null
          follow_up_date: string | null
          id: string
          lab_results: Json | null
          notes: string | null
          patient_id: string | null
          prescription: string | null
          updated_at: string | null
          visit_date: string
          visit_type: string
          vital_signs: Json | null
        }
        Insert: {
          chief_complaint?: string | null
          created_at?: string | null
          diagnosis?: string | null
          doctor_id?: string | null
          follow_up_date?: string | null
          id?: string
          lab_results?: Json | null
          notes?: string | null
          patient_id?: string | null
          prescription?: string | null
          updated_at?: string | null
          visit_date?: string
          visit_type?: string
          vital_signs?: Json | null
        }
        Update: {
          chief_complaint?: string | null
          created_at?: string | null
          diagnosis?: string | null
          doctor_id?: string | null
          follow_up_date?: string | null
          id?: string
          lab_results?: Json | null
          notes?: string | null
          patient_id?: string | null
          prescription?: string | null
          updated_at?: string | null
          visit_date?: string
          visit_type?: string
          vital_signs?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "health_records_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "health_records_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      health_resources: {
        Row: {
          address: string
          availability_status: boolean | null
          created_at: string | null
          created_by: string | null
          id: string
          latitude: number | null
          longitude: number | null
          name: string
          operating_hours: Json | null
          phone: string | null
          resource_type: string
          services: Json | null
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          address: string
          availability_status?: boolean | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name: string
          operating_hours?: Json | null
          phone?: string | null
          resource_type: string
          services?: Json | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          address?: string
          availability_status?: boolean | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name?: string
          operating_hours?: Json | null
          phone?: string | null
          resource_type?: string
          services?: Json | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "health_resources_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      health_tips: {
        Row: {
          category: string
          content: string
          created_at: string | null
          created_by: string | null
          id: string
          is_active: boolean | null
          language: string
          priority: number | null
          target_audience: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          language?: string
          priority?: number | null
          target_audience?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          language?: string
          priority?: number | null
          target_audience?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "health_tips_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          batch_number: string | null
          cost_per_unit: number | null
          created_at: string | null
          current_stock: number
          expiry_date: string | null
          id: string
          item_name: string
          item_type: string
          last_updated: string | null
          minimum_stock: number
          phc_id: string | null
          supplier: string | null
          unit: string
        }
        Insert: {
          batch_number?: string | null
          cost_per_unit?: number | null
          created_at?: string | null
          current_stock?: number
          expiry_date?: string | null
          id?: string
          item_name: string
          item_type: string
          last_updated?: string | null
          minimum_stock?: number
          phc_id?: string | null
          supplier?: string | null
          unit?: string
        }
        Update: {
          batch_number?: string | null
          cost_per_unit?: number | null
          created_at?: string | null
          current_stock?: number
          expiry_date?: string | null
          id?: string
          item_name?: string
          item_type?: string
          last_updated?: string | null
          minimum_stock?: number
          phc_id?: string | null
          supplier?: string | null
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_phc_id_fkey"
            columns: ["phc_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          aadhaar: string
          address: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string | null
          emergency_contact: string | null
          gender: string | null
          id: string
          name: string
          phc_name: string | null
          phone: string
          updated_at: string | null
          user_type: string
          village: string | null
        }
        Insert: {
          aadhaar: string
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          gender?: string | null
          id: string
          name: string
          phc_name?: string | null
          phone: string
          updated_at?: string | null
          user_type?: string
          village?: string | null
        }
        Update: {
          aadhaar?: string
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          gender?: string | null
          id?: string
          name?: string
          phc_name?: string | null
          phone?: string
          updated_at?: string | null
          user_type?: string
          village?: string | null
        }
        Relationships: []
      }
      queue_management: {
        Row: {
          actual_wait_time: number | null
          appointment_id: string | null
          called_at: string | null
          completed_at: string | null
          created_at: string | null
          estimated_wait_time: number | null
          id: string
          queue_date: string
          queue_number: number
          status: string
        }
        Insert: {
          actual_wait_time?: number | null
          appointment_id?: string | null
          called_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          estimated_wait_time?: number | null
          id?: string
          queue_date?: string
          queue_number: number
          status?: string
        }
        Update: {
          actual_wait_time?: number | null
          appointment_id?: string | null
          called_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          estimated_wait_time?: number | null
          id?: string
          queue_date?: string
          queue_number?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "queue_management_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          aadhaar: string
          address: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string | null
          emergency_contact: string | null
          gender: string | null
          id: string
          name: string
          phc_name: string | null
          phone: string
          updated_at: string | null
          user_type: string
          village: string | null
        }
        Insert: {
          aadhaar: string
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          gender?: string | null
          id?: string
          name: string
          phc_name?: string | null
          phone: string
          updated_at?: string | null
          user_type: string
          village?: string | null
        }
        Update: {
          aadhaar?: string
          address?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          gender?: string | null
          id?: string
          name?: string
          phc_name?: string | null
          phone?: string
          updated_at?: string | null
          user_type?: string
          village?: string | null
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
