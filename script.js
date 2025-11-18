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

//2. NESNE OLUŞTURMA (Kalıptan Üretim)
//"new" anahtar kelimesi, constructor'ı tetikler.

const kullanici1 = new Kullanici("Amy", "amiy@example.com");
const kullanici2 = new Kullanici("Lexa", "lexa@example.com");

//3. NESNELERİ KULLANMA
//Nesnelerin özelliklerine ve metotlarına erişebiliriz.

kullanici1.puanKazan(); //Amy 1 puan kazandı yeni puan: 1
kullanici1.puanKazan(); //Amy 1 puan kazandı yeni puan: 2
kullanici1.cikisYap(); //Amy çıkış yaptı.

kullanici2.puanKazan(); //Lexa 1 puan kazandı yeni puan: 1
kullanici2.cikisYap(); //Lexa çıkış yaptı.

//Metot zincirleme örneği

kullanici1.puanKazan().puanKazan().cikisYap();//Puanı 3 kez art arda arttırır.