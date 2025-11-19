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


//"extend kullanici" diyerek, KUllanici sınıfının her şeyini miras alıyoruz.
class Admin extends Kullanici{
    //Admin'e özel yeni bir method ekliyoruz.

    kullaniciSil(k){

        console.log(`${this.ad} (Admin), ${k.ad} adlı kullanıcıyı sildi.`);

    }
}

const admin1 = new Admin("Admin User", "admin@example.com");
const kullanici3= new Kullanici("Silinecek Kişi", "silinecek@test.com");

//admin, bir Kullanici olduğu için, "puanKazan" metoduna sahiptir.

admin1.puanKazan();

//Admin, kendi özel metodunu da kullanabilir.

admin1.kullaniciSil(kullanici3);

//IMMUTABILITY İHLALİ (KÖTÜ YÖNTEM)

const kullanici4 = {
    ad: "Alex",
    sehir: "Ankara"
};

function sehirDegistirMutate(kullanici, yeniSehir){

    //Orijinal nesne doğrudan değiştirilir, bu yüzden kötü bir yöntem

    kullanici.sehir = yeniSehir;
    return kullanici;
}

sehirDegistirMutate(kullanici4, "İzmir");
console.log("Mutate edilmiş orijinal kullanıcı:", kullanici4); //Çıktı: ad: "Alex", sehir: "İzmir" -> orijinal veri değişti

//IMMUTABILITY İÇİN UYGUN YÖNTEM (İYİ ÖRNEK)

const kullanici5 ={
    ad: "Maria",
    sehir: "Bursa"
};

function sehirDegistirImmutable(kullanici, yeniSehir){

    //Spread operatörü ile orijial kullanıcının bir kopyası oluşturulur ve sadece "şehir" özelliği güncellenir.

    return{...kullanici, sehir: yeniSehir};
}

const yeniKullanici2 = sehirDegistirImmutable(kullanici4, "Antalya");

console.log("Immutable orijinal kullanıcı:", kullanici2); // Çıktı: ad: Maria, şehir: Bursa -> orijinal veri değişmedi
console.log("Yeni oluşturulan kullanıcı:", yeniKullanici2); // Çıktı: ad: Maria, şehir: Antalya -> yeni veri oluşturuldu

