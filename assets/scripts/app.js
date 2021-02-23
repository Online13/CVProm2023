const students = [
    ["ANDRIAMANANTSOA Herilanto Tsitohaina Rasamoelina", "https://andryathr.github.io/mycv/"],
    ["ANDRIARINAIVO Riana Fenosoa", "https://ben029.github.io/moncv/"],
    ["HARENA Antenaina Lucka", "https://harena21.github.io/CV/"],
    ["HARINASANDRATRA Lahatra Fitiavana", "https://harinasandratra.github.io/cv2.html"],
    ["RABEASY Tojoniaina Angelo", "https://beasi.github.io/CV/"],
    ["RAFALIMANANA Fanomezantsoa Michaël", "https://michaelraf.github.io/"],
    ["RAFIDY Julie Tassia", "https://aissat99.github.io/cv/"],
    ["RAKOTOBE Manoella", "https://rmanoella.github.io/cv2.html"],
    ["RAKOTONIAINA Ihantakolointsoa Tamby Vetsonandrandraina", "https://tamby02.github.io/"],
    ["RAMANANJANAHARY Andy Astier", "https://4ndy4stier.github.io/"],
    ["RAMANDRIJOEL Jehovanie", "https://jehovanie.github.io/"],
    ["RAMAROKOTO Mirindra Toavina Nancy", "https://mirindra31.github.io/"],
    ["RAMAROSON Aromanda Mitantsoa", "https://aro20.github.io/"],
    ["RANAIVOSOA Gérald Rindra", "https://rindra33.github.io/cv/"],
    ["RANDRIA Aina Nirina", "https://ainanirina.github.io/CV/"],
    ["RANDRIAMASY Heriniaina", "https://nyainah.github.io/"],
    ["RANDRIAMIHAJA Harivola", "https://harry-anthony.github.io/CV/"],
    ["RANDRIANARISOA Nantenaina Parfait Kévin", "-"],
    ["RASOANOMENJANAHARY Alphonsine", "https://alphonsine3434.github.io/"],
    ["RASOLO ALLAOUI Tsilavo Maminiaina Manatombo", "https://tsilaallaoui.github.io/"],
    ["RATEFIARISON Harivony Lalatiana", "http://tensoreleven.github.io/"],
    ["RATIARIVELO Nekena Rayane", "https://online13.github.io/"],
    ["RATSIMA Niaina Fredson Dorel", "https://niainadorel.github.io/"],
    ["RAZANAJATOVO Njato Iavoko", "https://njato2001.github.io/CV/"],
    ["RATOVONIAINA Tsilavo Fitiavana", "https://harry-anthony.github.io/CV/"],
];

const list = document.querySelector('main ul');

function ItemComponent(student) {
    const className = student[1] === "-" ? `class="disabled"` : null;
    return `<li ${className}>
        ${student[0]}
        <a href="${student[1]}" target="_blank">
            <img id="f" title="visiter ?" alt="f" src="./assets/images/forward.png" />
        </a>
    </li>`
}

students.forEach(student => {
    list.innerHTML += ItemComponent(student);
})
