export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      locations: {
        Row: {
          created_at: string;
          id: string;
          lat: number;
          lng: number;
        };
        Insert: {
          created_at?: string;
          id?: string;
          lat: number;
          lng: number;
        };
        Update: {
          created_at?: string;
          id?: string;
          lat?: number;
          lng?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
