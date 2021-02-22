const students = [
    ["ANDRIAMANANTSOA Herilanto Tsitohaina Rasamoelina", "lien"],
    ["ANDRIARINAIVO Riana Fenosoa", "lien"],
    ["HARENA Antenaina Lucka", "lien"],
    ["HARINASANDRATRA Lahatra Fitiavana", "https://harinasandratra.github.io/cv2.html"],
    ["RABEASY Tojoniaina Angelo", "https://beasi.github.io/CV/"],
    ["RAFALIMANANA Fanomezantsoa Michaël", "lien"],
    ["RAFIDY Julie Tassia", "lien"],
    ["RAKOTOBE Manoella", "lien"],
    ["RAKOTONIAINA Ihantakolointsoa Tamby Vetsonandrandraina", "lien"],
    ["RAMANANJANAHARY Andy Astier", "lien"],
    ["RAMANDRIJOEL Jehovanie", "lien"],
    ["RAMAROKOTO Mirindra Toavina Nancy", "lien"],
    ["RAMAROSON Aromanda Mitantsoa", "https://aro20.github.io/"],
    ["RANAIVOSOA Gérald Rindra", "lien"],
    ["RANDRIA Aina Nirina", "lien"],
    ["RANDRIAMASY Heriniaina", "lien"],
    ["RANDRIAMIHAJA Harivola", "https://harry-anthony.github.io/CV/"],
    ["RANDRIANARISOA Nantenaina Parfait Kévin", "lien"],
    ["RASOANOMENJANAHARY Alphonsine", "https://alphonsine3434.github.io/"],
    ["RASOLO ALLAOUI Tsilavo Maminiaina Manatombo", "lien"],
    ["RATEFIARISON Harivony Lalatiana", "lien"],
    ["RATIARIVELO Nekena Rayane", "https://online13.github.io/"],
    ["RATSIMA Niaina Fredson Dorel", "lien"],
    ["RAZANAJATOVO Njato Iavoko", "lien"],
    ["RATOVONIAINA Tsilavo Fitiavana", "https://harry-anthony.github.io/CV/"],
];

const list = document.querySelector('main ul');

students.forEach(student => {
    list.innerHTML += `<li>${student[0]}<a ${student[1] === "lien" ? `class="disabled"` : null } href="${student[1]}" target="_blank"><i class="gg-eye"></i></a></li>`
})
