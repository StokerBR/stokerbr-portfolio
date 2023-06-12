<template>
  <div class="content-wrapper">
    <IntroductionSection />
    <p class="soon">Portfólio em construção... 🚧</p>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();

onMounted(() => {
  /* if (localStorage.getItem("locale")) {
    setLocale(localStorage.getItem("locale"));
  } */
  /* let userLang = navigator.language || navigator.userLanguage || "en";
  userLang = userLang.substr(0, 2);

  if (localStorage.getItem("locale") != userLang) {
    setLocale(userLang);
  }
  
  localStorage.setItem("locale", userLang);
  locale.value = userLang; */
});
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import url("https://fonts.cdnfonts.com/css/mona-sans");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css");

html,
body,
#__nuxt,
.content-wrapper {
  width: 100%;
  height: 100%;
  font-family: "Mona-Sans", sans-serif;
  color: white;
}

body {
  margin: 0;
  background: linear-gradient(135deg, #252525, #101010);
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .soon {
    font-size: 12px;
    font-weight: 200;
    text-align: center;
    position: absolute;
    bottom: 50px;
  }
}
</style>
