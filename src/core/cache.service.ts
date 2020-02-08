import { Observable } from 'rxjs';

export abstract class CacheService {
  protected cache: Map<string, object>;
  abstract get<Type>(key: string, fallback?: Observable<Type>, maxAge?: number): Observable<Type>;
  abstract set<Type>(key: string, value: Type, maxAge?: number): void;
  abstract has(key: string): boolean;
}
