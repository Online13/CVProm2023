const students = [
    ["ANDRIAMANANTSOA Herilanto Tsitohaina Rasamoelina", "https://andryathr.github.io/mycv/"],
    ["ANDRIARINAIVO Riana Fenosoa", "https://ben029.github.io/moncv/"],
    ["HARENA Antenaina Lucka", "https://harena21.github.io/CV/"],
    ["HARINASANDRATRA Lahatra Fitiavana", "https://harinasandratra.github.io/cv2.html"],
    ["RABEASY Tojoniaina Angelo", "https://beasi.github.io/CV/"],
    ["RAFALIMANANA Fanomezantsoa Michaël", "https://michaelraf.github.io/"],
    ["RAFIDY Julie Tassia", "https://aissat99.github.io/cv/"],
    ["RAKOTOBE Manoella", "https://rmanoella.github.io/cv2.html"],
    ["RAKOTONIAINA Ihantakolointsoa Tamby Vetsonandrandraina", "lien"],
    ["RAMANANJANAHARY Andy Astier", "lien"],
    ["RAMANDRIJOEL Jehovanie", "lien"],
    ["RAMAROKOTO Mirindra Toavina Nancy", "lien"],
    ["RAMAROSON Aromanda Mitantsoa", "https://aro20.github.io/"],
    ["RANAIVOSOA Gérald Rindra", "https://rindra33.github.io/cv/"],
    ["RANDRIA Aina Nirina", "https://ainanirina.github.io/CV/"],
    ["RANDRIAMASY Heriniaina", "https://nyainah.github.io/"],
    ["RANDRIAMIHAJA Harivola", "https://harry-anthony.github.io/CV/"],
    ["RANDRIANARISOA Nantenaina Parfait Kévin", "lien"],
    ["RASOANOMENJANAHARY Alphonsine", "https://alphonsine3434.github.io/"],
    ["RASOLO ALLAOUI Tsilavo Maminiaina Manatombo", "lien"],
    ["RATEFIARISON Harivony Lalatiana", "http://tensoreleven.github.io/"],
    ["RATIARIVELO Nekena Rayane", "https://online13.github.io/"],
    ["RATSIMA Niaina Fredson Dorel", "lien"],
    ["RAZANAJATOVO Njato Iavoko", "https://njato2001.github.io/CV/"],
    ["RATOVONIAINA Tsilavo Fitiavana", "https://harry-anthony.github.io/CV/"],
];

const list = document.querySelector('main ul');

students.forEach(student => {
    const className = student[1] === "lien" ? `class="disabled"` : null;
    list.innerHTML += `<li>
        ${student[0]}<a ${className} href="${student[1]}" target="_blank">
        <i class="gg-eye"></i></a>
    </li>`
})
