import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) { }

  obtener(tabla, show?): Observable<any> {
    
    this.itemsCollection = this.db.collection(tabla);
    
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  async obtenerPromise(tabla, show?) {
    let returnData = [];
    var data = await this.db.collection(tabla).get().toPromise();
    data.forEach(info => {
      var d = info.data();
      d["id"] = info.id;
      returnData.push(d);
    });
    return returnData;
  }

  obtenerId(tabla, id, show?): Observable<any> {
    
    this.itemsCollection = this.db.collection(tabla, ref => ref.where('id', '==', id));
    
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerByContactoID(id, show?): Observable<any> {
    
    this.itemsCollection = this.db.collection('usuario-app', ref => ref.where('num_ide', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  async obtenerIdPromise(tabla, id, show?) {
    const returnData = [];
    const data = await this.db.collection(tabla, ref => ref.where('id', '==', id)).get().toPromise();
    data.forEach(info => {
      const d = info.data();
      d.id = info.id;
      returnData.push(d);
    });
    return returnData;
  }

  public async obtenerForPromise(tabla: string, firstQuery: string, secondQuery): Promise<any> {
    const dataReturn = [];
    const data = await this.db.collection(tabla, ref => ref.where(firstQuery, '==', secondQuery)).get().toPromise();
    data.forEach(element => {
      const d = element.data();
      d.id = element.id;
      dataReturn.push(d);
    });
    return dataReturn;
  }

  obtenerUniqueId(tabla, id, show?): Observable<any> {
    

    this.itemsCollection = this.db.collection(tabla, ref => ref.where('uniqueid', '==', id));

    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  public obtenerForObsevable(tabla: string, firstQuery: string, secondQuery): Observable<any> {
    this.itemsCollection = this.db.collection(tabla, ref => ref.where(firstQuery, '==', secondQuery));
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

  async obtenerUniqueIdPromise(tabla, id) {
    let returnData = [];
    var data = await this.db.collection(tabla, ref => ref.where('uniqueid', '==', id)).get().toPromise();
    data.forEach(info => {
      var d = info.data();
      d["id"] = info.id;
      returnData.push(d);
    });
    return returnData;
  }

  async obtenerUserUniqueId(tabla, id, show?): Promise<any> {
    this.itemsCollection = this.db.collection(tabla, ref => ref.where('uniqueid', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    ).toPromise();
  }

  obtenerRegistrado(cel): Observable<any> {
    this.itemsCollection = this.db.collection('registrados', ref => ref.where('cel', '==', cel));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }


  obtenerMisServicios(id): Observable<any> {
    this.itemsCollection = this.db.collection('request-services', ref => ref.where('userRequest', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerMisServiciosHistorial(id): Observable<any> {
    this.itemsCollection = this.db.collection('services-ended', ref => ref.where('userRequest', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerMisProductos(idUnico): Observable<any> {
    this.itemsCollection = this.db.collection('request-products', ref => ref.where('userRequest', '==', idUnico));
    
    return this.itemsCollection.snapshotChanges().pipe(

      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })

    );

  }


  obtenerCategoriasServicio(id): Observable<any> {
    
    this.itemsCollection = this.db.collection('usuario-app');
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerMisOfertas(id): Observable<any> {
    this.itemsCollection = this.db.collection('request-services', ref => ref.where('userOffers', 'array-contains', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerMisOfertasProducto(id): Observable<any> {
    this.itemsCollection = this.db.collection('request-products', ref => ref.where('usersOffers', 'array-contains', id));
    return this.itemsCollection.snapshotChanges().pipe(

      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })

    );
  }

  obtenerMisOfertasHistorial(id): Observable<any> {
    this.itemsCollection = this.db.collection('services-ended', ref => ref.where('userOffers', 'array-contains', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }


  obtenerLogin(user, pass): Observable<any> {
    this.itemsCollection = this.db.collection('usuarios', ref => ref.where('user', '==', user).where('pass', '==', pass));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerChat(id) {
    this.itemsCollection = this.db.collection('chat', ref => ref.where('uniqueId', '==', id));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerChatReceptor(idReceptor) {
    this.itemsCollection = this.db.collection('chat', ref => ref.where('receptor', '==', idReceptor));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  obtenerChatEmisor(idEmisor) {
    this.itemsCollection = this.db.collection('chat', ref => ref.where('emisor', '==', idEmisor));
    return this.itemsCollection.snapshotChanges().pipe(
      map(data => {
        return data.map(d => {
          const retorno = d.payload.doc.data();
          retorno['id'] = d.payload.doc.id;
          return retorno;
        });
      })
    );
  }

  guardarDatos(tabla: string, data, show?) {
    if (show) {
    }
    this.itemsCollection = this.db.collection<any>(tabla);
    return this.itemsCollection.add(JSON.parse(JSON.stringify(data))).then(
      () => {

        return true;
      }
    ).catch(() => {

      return false;
    });
  }

  actualizarDatos(tabla, data, id, show?) {
    if (show) {
    }
    this.itemsCollection = this.db.collection<any>(tabla);
    return this.itemsCollection.doc(id).update(JSON.parse(JSON.stringify(data))).then(
      () => {

        return true;
      }
    ).catch(() => {

      return false;
    });
  }

  eliminarDatos(tabla: string, id: any, show?) {
    if (show) {
    }
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
