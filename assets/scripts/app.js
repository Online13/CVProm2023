const students = [
    ["ANDRIAMANANTSOA Herilanto Tsitohaina Rasamoelina", "lien"],
    ["ANDRIARINAIVO Riana Fenosoa", "lien"],
    ["HARENA Antenaina Lucka", "lien"],
    ["HARINASANDRATRA Lahatra Fitiavana", "lien"],
    ["RABEASY Tojoniaina Angelo", "lien"],
    ["RAFALIMANANA Fanomezantsoa Michaël", "lien"],
    ["RAFIDY Julie Tassia", "lien"],
    ["RAKOTOBE Manoella", "lien"],
    ["RAKOTONIAINA Ihantakolointsoa Tamby Vetsonandrandraina", "lien"],
    ["RAMANANJANAHARY Andy Astier", "lien"],
    ["RAMANDRIJOEL Jehovanie", "lien"],
    ["RAMAROKOTO Mirindra Toavina Nancy", "lien"],
    ["RAMAROSON Aromanda Mitantsoa", "lien"],
    ["RANAIVOSOA Gérald Rindra", "lien"],
    ["RANDRIA Aina Nirina", "lien"],
    ["RANDRIAMASY Heriniaina", "lien"],
    ["RANDRIAMIHAJA Harivola", "lien"],
    ["RANDRIANARISOA Nantenaina Parfait Kévin", "lien"],
    ["RASOANOMENJANAHARY Alphonsine", "lien"],
    ["RASOLO ALLAOUI Tsilavo Maminiaina Manatombo", "lien"],
    ["RATEFIARISON Harivony Lalatiana", "lien"],
    ["RATIARIVELO Nekena Rayane", "lien"],
    ["RATSIMA Niaina Fredson Dorel", "lien"],
    ["RAZANAJATOVO Njato Iavoko", "lien"],
    ["RATOVONIAINA Tsilavo Fitiavana", "lien"],
];

const list = document.querySelector('main ul');

students.forEach(student => {
    list.innerHTML += `<li>${student[0]}<a ${student[1] === "lien" ? `class="disabled"` : null } href="${student[1]}"><i class="gg-eye"></i></a></li>`
})