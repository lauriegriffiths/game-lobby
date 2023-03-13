export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			class: {
				Row: {
					created_at: string | null;
					id: number;
					school_id: number | null;
					title: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					school_id?: number | null;
					title: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					school_id?: number | null;
					title?: string;
				};
			};
			coords: {
				Row: {
					id: number;
					x: number | null;
					y: number | null;
				};
				Insert: {
					id?: number;
					x?: number | null;
					y?: number | null;
				};
				Update: {
					id?: number;
					x?: number | null;
					y?: number | null;
				};
			};
			count: {
				Row: {
					count: number;
					created_at: string | null;
					email: string;
					hidden: boolean;
					id: number;
					name: string | null;
					penguin_id: number;
				};
				Insert: {
					count?: number;
					created_at?: string | null;
					email?: string;
					hidden?: boolean;
					id?: number;
					name?: string | null;
					penguin_id?: number;
				};
				Update: {
					count?: number;
					created_at?: string | null;
					email?: string;
					hidden?: boolean;
					id?: number;
					name?: string | null;
					penguin_id?: number;
				};
			};
			dish: {
				Row: {
					created_at: string | null;
					id: string;
					word_en: string | null;
					word_ja: string | null;
				};
				Insert: {
					created_at?: string | null;
					id: string;
					word_en?: string | null;
					word_ja?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: string;
					word_en?: string | null;
					word_ja?: string | null;
				};
			};
			game: {
				Row: {
					code: string;
					created_at: string | null;
					id: number;
				};
				Insert: {
					code: string;
					created_at?: string | null;
					id?: number;
				};
				Update: {
					code?: string;
					created_at?: string | null;
					id?: number;
				};
			};
			lesson: {
				Row: {
					created_at: string | null;
					id: number;
					school_id: number | null;
					title: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					school_id?: number | null;
					title: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					school_id?: number | null;
					title?: string;
				};
			};
			penguin: {
				Row: {
					created_at: string | null;
					email: string;
					id: number;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					email?: string;
					id?: number;
					name: string;
				};
				Update: {
					created_at?: string | null;
					email?: string;
					id?: number;
					name?: string;
				};
			};
			request: {
				Row: {
					created_at: string | null;
					id: number;
					status: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					status?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					status?: string | null;
				};
			};
			school: {
				Row: {
					created_at: string | null;
					id: number;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					name: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					name?: string;
				};
			};
			student: {
				Row: {
					created_at: string | null;
					id: number;
					lesson_id: number | null;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					lesson_id?: number | null;
					name: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					lesson_id?: number | null;
					name?: string;
				};
			};
			word: {
				Row: {
					created_at: string | null;
					id: number;
					word_en: string;
					word_ja: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					word_en?: string;
					word_ja?: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					word_en?: string;
					word_ja?: string;
				};
			};
		};
		Views: {
			roster: {
				Row: {
					name: string | null;
					title: string | null;
				};
			};
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
