const students = [
    ["ANDRIAMANANTSOA Herilanto Tsitohaina Rasamoelina", "https://andryathr.github.io/mycv/"],
    ["ANDRIARINAIVO Riana Fenosoa", "https://ben029.github.io/moncv/"],
    ["HARENA Antenaina Lucka", "https://harena21.github.io/CV/"],
    ["HARINASANDRATRA Lahatra Fitiavana", "lien"],
    ["RABEASY Tojoniaina Angelo", "lien"],
    ["RAFALIMANANA Fanomezantsoa Michaël", "https://michaelraf.github.io/"],
    ["RAFIDY Julie Tassia", "https://aissat99.github.io/cv/"],
    ["RAKOTOBE Manoella", "lien"],
    ["RAKOTONIAINA Ihantakolointsoa Tamby Vetsonandrandraina", "lien"],
    ["RAMANANJANAHARY Andy Astier", "lien"],
    ["RAMANDRIJOEL Jehovanie", "lien"],
    ["RAMAROKOTO Mirindra Toavina Nancy", "lien"],
    ["RAMAROSON Aromanda Mitantsoa", "lien"],
    ["RANAIVOSOA Gérald Rindra", "lien"],
    ["RANDRIA Aina Nirina", "https://ainanirina.github.io/CV/"],
    ["RANDRIAMASY Heriniaina", "lien"],
    ["RANDRIAMIHAJA Harivola", "lien"],
    ["RANDRIANARISOA Nantenaina Parfait Kévin", "lien"],
    ["RASOANOMENJANAHARY Alphonsine", "lien"],
    ["RASOLO ALLAOUI Tsilavo Maminiaina Manatombo", "lien"],
    ["RATEFIARISON Harivony Lalatiana", "http://tensoreleven.github.io/"],
    ["RATIARIVELO Nekena Rayane", "https://online13.github.io/"],
    ["RATSIMA Niaina Fredson Dorel", "lien"],
    ["RAZANAJATOVO Njato Iavoko", "https://njato2001.github.io/CV/"],
    ["RATOVONIAINA Tsilavo Fitiavana", "lien"],
];

const list = document.querySelector('main ul');

students.forEach(student => {
    list.innerHTML += `<li>${student[0]}<a ${student[1] === "lien" ? `class="disabled"` : null } href="${student[1]}"><i class="gg-eye"></i></a></li>`
})
