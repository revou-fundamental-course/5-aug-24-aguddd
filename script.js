
        let alertValidate = document.querySelector('.alert');
        let tinggiValidate = document.querySelector('.tinggi-badan');
        let beratValidate = document.querySelector('.berat-badan');
        let alertP = document.querySelector('.alert');
        let ada = 0;
        let infoHasil = document.querySelector('.info-hasil');

        function reset(){
            document.getElementById('tinggi-badan').value = '';
            document.getElementById('berat-badan').value = '';
            // infoHasil.style.display = "none";
        }
        function kirim(){
            let bmi;
            let ket;
            let saran;
            let antara;
            
            
            alertP.style.display = "none";
            let nilaiTinggiBadan = document.getElementById('tinggi-badan').value;
            let nilaiBeratBadan = document.getElementById('berat-badan').value;
            // console.log(nilaiTinggiBadan);
            let ada = true;
            tinggiValidate.classList.remove('merah');
            beratValidate.classList.remove('merah');
            // console.log(nilaiBeratBadan);
            if(!nilaiTinggiBadan || isNaN(nilaiTinggiBadan)){
                
                ada = false;
                tinggiValidate.classList.add('merah');

            }
            if(!nilaiBeratBadan || isNaN(nilaiBeratBadan)){
                ada = false;
                beratValidate.classList.add('merah');

            }
                
            
            if(!ada){
                alertValidate.innerHTML = "Isi semua data dan Input dengan Angka";
                
                
                
                alertP.style.display = "block";
            }else{
                nilaiTinggiBadan = nilaiTinggiBadan/100;
                // rumus bmi adalah berat badan / kuadrat tinggi badan
                bmi = nilaiBeratBadan/(nilaiTinggiBadan * nilaiTinggiBadan);
               
                bmi = bmi.toFixed(1);
                console.log(bmi);
                if(bmi<18.5){
                    console.log("Kurang dari 18.5 Kekurangan Berat Badan");
                    antara = "Kurang dari 18.5";
                    ket ="Kekurangan Berat Badan";
                    saran = "Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan."
                    
                }else if(bmi >= 18.5 && bmi <=24.9){
                    console.log("18.5 - 24.9 Normal Ideal");  
                    antara = "antara 18.5 dan 24.9";
                    ket = "Normal";
                    saran = "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda."
                }else if(bmi >= 25 && bmi <=29.9){
                    antara = "antara 25 dan 29.9";
                    ket = "Kelebihan Berat Badan";
                    saran = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
                }else if(bmi >= 30){
                    antara = "lebih dari 30";
                    ket = "Obesitas"
                    saran ="Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
                }
                
                infoHasil.style.display = "flex";
                document.querySelector('.saran').innerHTML = saran;
                document.querySelector('.nilai-hasil').innerHTML = bmi;
                document.querySelector('.status').innerHTML = ket;
                document.querySelector('.status-1').innerHTML = ket;
                document.querySelector('.antara').innerHTML = antara;
            }    
        }
   