const langData = {
    ru: {
        title: "Молодёжь и старшее поколение: партнёрство во имя общества будущего",
        subtitle: "Исследование межпоколенческого диалога, различий поколений и их совместной роли в формировании современного общества.",
        desc: "Наш проект посвящён изучению взаимодействия молодёжи и старшего поколения в условиях быстро меняющегося мира. Мы рассматриваем, как цифровые навыки, гибкость и стремление к переменам, присущие молодым людям, могут сочетаться с опытом, мудростью и жизненными знаниями старшего поколения. Основная цель проекта — показать, что устойчивое развитие общества возможно не через противостояние поколений, а через их сотрудничество, взаимопонимание и эффективную передачу опыта.",
        tv1: "Молодые участники делятся своим взглядом на современные технологии, общественные ожидания, личную мотивацию, успех и отношения со старшими поколениями.",
        tv2: "Представители старшего поколения рассказывают о своём жизненном опыте, ценностях, важности наставничества и роли передачи знаний молодёжи.",
        ideaTitle: "Сотрудничество поколений как основа будущего",
        ideaText: "Молодёжь становится источником инноваций и новых идей, а старшее поколение сохраняет историческую память и социальную устойчивость. Объединение этих качеств создаёт основу для решения глобальных вызовов.",
        importanceTitle: "Почему это важно",
        importanceItems: [
            "Сохранение и передача фундаментальных ценностей",
            "Использование опыта прошлого для предотвращения ошибок",
            "Поддержка инновационного развития через наставничество",
            "Укрепление социальной стабильности",
            "Формирование устойчивого общества будущего"
        ],
        stripSrc: "assets/img/strip1.png",
        themesTitle: "Ключевые вопросы проекта",
        finalTitle: "Вывод",
        finalText: "Различия между поколениями не должны становиться причиной разобщённости. Напротив, они могут служить источником развития, если общество строится на сотрудничестве, уважении и взаимной поддержке. Наш проект доказывает, что только объединение молодёжной энергии и жизненного опыта старшего поколения способно обеспечить гармоничное и устойчивое развитие общества. Будущее создаётся через союз инноваций, мудрости и взаимного уважения."
    },
    fr: {
        title: "Les jeunes et l’ancienne génération : partenariat au service de la société de l’avenir",
        subtitle: "Une étude du dialogue intergénérationnel, des différences entre générations et de leur rôle commun dans la construction de la société moderne.",
        desc: "Notre projet est consacré à l’étude de l’interaction entre les jeunes et l’ancienne génération dans un monde en constante évolution. Nous analysons comment les compétences numériques, la flexibilité et l’élan de changement propres à la jeunesse peuvent être combinés avec l’expérience, la sagesse et les connaissances de vie des aînés. L’objectif principal du projet est de démontrer que le développement durable de la société est possible non pas à travers le conflit des générations, mais grâce à leur coopération, leur compréhension mutuelle et une transmission efficace de l’expérience.",
        tv1: "Les jeunes partagent leur vision du monde numérique, des attentes sociales, de la motivation personnelle, du succès et de leurs relations avec les générations précédentes.",
        tv2: "Les représentants de l’ancienne génération présentent leur expérience de vie, leurs valeurs, l’importance du mentorat et le rôle fondamental de la transmission des connaissances.",
        ideaTitle: "La coopération intergénérationnelle comme fondement de l’avenir",
        ideaText: "La jeunesse représente l’innovation и le changement, tandis que l’ancienne génération apporte l’expérience et la mémoire collective. L’union de ces qualités constitue une base solide pour l’avenir.",
        importanceTitle: "L’importance sociale du projet",
        importanceItems: [
            "Préserver et transmettre les valeurs",
            "Éviter les erreurs du passé grâce à l’expérience",
            "Soutenir l’innovation par le mentorat",
            "Renforcer la stabilité sociale",
            "Construire une société plus équilibrée et durable"
        ],
        stripSrc: "assets/img/strip2.png",
        themesTitle: "Les questions clés du projet",
        finalTitle: "CONCLUSION",
        finalText: "Les différences entre générations ne doivent pas être une source de division. Au contraire, elles peuvent devenir un moteur de développement si la société repose sur la coopération, le respect mutuel et le soutien réciproque. Notre projet démontre que seule l’union entre l’énergie de la jeunesse et la sagesse de l’expérience permet d’assurer un développement harmonieux et durable. L’avenir se construit par l’alliance de l’innovation, de la sagesse et du respect mutuel."
    }
};

function changeLang(lang) {
    const d = langData[lang];
    if (!d) return;

    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    updateText('main-title', d.title);
    updateText('main-subtitle', d.subtitle);
    updateText('main-desc', d.desc);
    updateText('tv-text-1', d.tv1);
    updateText('tv-text-2', d.tv2);
    updateText('idea-title', d.ideaTitle);
    updateText('idea-text', d.ideaText);
    updateText('importance-title', d.importanceTitle);
    updateText('themes-title', d.themesTitle);
    updateText('final-title', d.finalTitle);
    updateText('final-text', d.finalText);

    // Рендер списка "Почему это важно"
    const listContainer = document.getElementById('importance-list');
    if (listContainer) {
        listContainer.innerHTML = d.importanceItems.map(item => `<div class="list-item">${item}</div>`).join('');
    }

    const img = document.getElementById('strip-img');
    if (img) img.src = d.stripSrc;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${lang}'`));
    });
}

function initPlayer(settings) {
    const vParent = document.getElementById(settings.parent);
    const vPlayer = document.getElementById(settings.video);
    const pBar = document.getElementById(settings.pBar);
    const timeDisplay = document.getElementById(settings.time);

    if (!vParent || !vPlayer) return;

    const togglePlay = () => {
        if (vPlayer.paused) {
            vPlayer.play();
            vParent.classList.add('video-playing');
            vParent.classList.remove('video-paused');
        } else {
            vPlayer.pause();
            vParent.classList.remove('video-playing');
            vParent.classList.add('video-paused');
        }
    };

    vParent.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') togglePlay();
    });

    vPlayer.addEventListener('timeupdate', () => {
        const progress = (vPlayer.currentTime / vPlayer.duration) * 100;
        pBar.value = progress || 0;
        const format = (s) => new Date(s * 1000).toISOString().substr(14, 5);
        timeDisplay.innerText = `${format(vPlayer.currentTime)} / ${format(vPlayer.duration || 0)}`;
    });

    pBar.addEventListener('input', () => {
        vPlayer.currentTime = (pBar.value / 100) * vPlayer.duration;
    });

    vParent.classList.add('video-paused');
}

document.addEventListener('DOMContentLoaded', () => {
    changeLang('ru');

    // 2. Инициализируем плееры
    initPlayer({
        parent: 'video-young',
        video: 'my-video-young',
        pBar: 'pbar-young',
        time: 'time-young'
    });

    initPlayer({
        parent: 'video-old',
        video: 'my-video-old',
        pBar: 'pbar-old',
        time: 'time-old'
    });
});