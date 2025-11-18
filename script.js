//1. SINIF TANIMLAMA
//Sınıf isimleri geleneksel olarak büyük harfle başlar.

class Kullanici{

    //constructor, bu sınıftan yeni bir nesne oluşturulduğunda
    //otomatik olarak çalışan özel bir metottur
    //başlangıç özelliklerini (verilerini) ayarlar.

    constructor(ad, email){
        this.ad=ad;
        this.email=email;
        this.puan = 0; //Varsayılan bir özellik
        console.log(`&{this.ad} adında yeni bir kullanıcı oluşturuldu.`)
    }

    //DAVRANIŞLAR (Metotlar)
    //Bu metotlar, bu sınıftan üretilen her nesne tarafından kullanılabilir.

    puanKazan(){

        this.puan++;
        console.log(`${this.ad} bir puan kazandı! Yeni puan: ${this.puan}`);
        return this; //Metot zincirleme (method chaining) için this'i döndürmek yaygın bir pratiktir.

    }

    cikisYap(){

        console.log(`${this.ad} çıkış yaptı.`);
    }
}
