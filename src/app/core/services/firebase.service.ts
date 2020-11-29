import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) { }

  public obtener(tabla, show?): Observable<any> {
    this.itemsCollection = this.db.collection(tabla);
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno.id = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  public async obtenerPromise(tabla, show?): Promise<any[]> {
    const returnData = [];
    const data = await this.db.collection(tabla).get().toPromise();
    data.forEach(info => {
      const d = info.data();
      d.id = info.id;
      returnData.push(d);
    });
    return returnData;
  }

  public obtenerId(tabla, id, show?): Observable<any> {
    this.itemsCollection = this.db.collection(tabla, ref => ref.where('id', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno.id = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  public async obtenerIdPromise(tabla, id, show?): Promise<any[]> {
    const returnData = [];
    const data = await this.db.collection(tabla, ref => ref.where('id', '==', id)).get().toPromise();
    data.forEach(info => {
      const d = info.data();
      d.id = info.id;
      returnData.push(d);
    });
    return returnData;
  }

  public obtenerUniqueId(tabla, id): Observable<any> {
    this.itemsCollection = this.db.collection(tabla, ref => ref.where('idunico', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno.id = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  public async obtenerUniqueIdPromise(tabla, id): Promise<any[]> {
    const returnData = [];
    const data = await this.db.collection(tabla, ref => ref.where('idunico', '==', id)).get().toPromise();
    data.forEach(info => {
      const d = info.data();
      d.id = info.id;
      returnData.push(d);
    });
    return returnData;
  }

  public async obtenerByContactoIDPromise(id, show?) {
    const returnData = [];
    const data = await this.db.collection('usuario-app', ref => ref.where('num_ide', '==', id)).get().toPromise();
    data.forEach(info => {
      const d = info.data();
      d.id = info.id;
      returnData.push(d);
    });
    return returnData;
  }

  public obtenerProductoCategoria(categoria): Observable<any> {
    this.itemsCollection = this.db.collection('productos', ref => ref.where('idunicoCategoria', '==', categoria));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno.id = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  public save(tabla: string, data): Promise<string | boolean> {
    this.itemsCollection = this.db.collection<any>(tabla);
    return this.itemsCollection.add(JSON.parse(JSON.stringify(data))).then(
      (resp) => {
        return resp.id;
      }
    ).catch(() => {
      return false;
    });
  }

  public actualizarDatos(tabla, data, id): Promise<boolean> {
    this.itemsCollection = this.db.collection<any>(tabla);
    return this.itemsCollection.doc(id).update(JSON.parse(JSON.stringify(data))).then(
      () => {
        return true;
      }
    ).catch(() => {
      return false;
    });
  }

  public eliminarDatos(tabla: string, id: any): void {
    this.itemsCollection = this.db.collection<any>(tabla);
    this.itemsCollection.doc(id).delete().then(
      () => {
        return true;
      }
    ).catch(() => {
      return false;
    });
  }

}
