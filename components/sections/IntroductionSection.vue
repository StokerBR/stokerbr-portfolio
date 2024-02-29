<script setup></script>

<template>
  <section class="introduction">
    <div class="top">
      <span class="greetings" v-html="$t('introduction.greetings')"></span>
      <div class="links">
        <a href="https://github.com/StokerBR" target="_blank" class="link">
          <img src="~/assets/icons/github.svg" alt="GitHub" title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/stokerbr"
          target="_blank"
          class="link"
        >
          <img
            src="~/assets/icons/linkedin.svg"
            alt="LinkedIn"
            title="LinkedIn"
          />
        </a>
        <a href="mailto:henrique@stokerbr.com" target="_blank" class="link">
          <img
            src="~/assets/icons/gmail.svg"
            alt="Email"
            title="henrique@stokerbr.com"
          />
        </a>
      </div>
    </div>
    <h1 class="name">Henrique</h1>
    <div class="details">
      <div class="stokerbr">
        <span class="stokerbr-text aka">AKA</span>
        <BubbleText text="StokerBR" class="stokerbr-text" />
      </div>
      <span class="profession" v-html="$t('introduction.profession')"></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/stokerbr-text.scss';

h1 {
  margin: unset;
}

.introduction {
  .top {
    display: flex;

    .greetings {
      font-size: 24px;
      font-weight: 600;
    }

    .links {
      display: flex;
      align-items: center;
      margin-left: auto;
      font-size: 24px;
      font-weight: 600;
      column-gap: 10px;

      .link {
        cursor: pointer;
        line-height: 0;

        img {
          height: 28px;
          filter: invert(26%) sepia(100%) saturate(2849%) hue-rotate(205deg)
            brightness(106%) contrast(103%) /* drop-shadow($neon-box-shadow) */;
          // filter: invert(20%) sepia(99%) saturate(1949%) hue-rotate(201deg)
          // brightness(100%) contrast(101%);
          transition: all 0.2s;
        }

        &:hover img {
          // transform: scale(1.1);
          transform: translateY(-3px);
          // filter: invert(26%) sepia(100%) saturate(2849%) hue-rotate(205deg)
          // brightness(106%) contrast(103%)
          /* drop-shadow($neon-box-shadow-large) */
        }
      }
    }
  }

  .name {
    font-size: 100px;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
  }

  .details {
    display: flex;
    align-items: flex-start;

    .stokerbr-text {
      display: block;
    }

    .profession {
      font-size: 26px;
      margin-left: auto;
      text-align: right;
    }
  }

  @media (max-width: 1199px) {
    .name {
      font-size: 80px;
    }
    .top {
      .greetings {
        font-size: 18px;
      }
      .links .link img {
        height: 24px;
      }
    }
    .details {
      .stokerbr-text {
        font-size: 28px;
        &.aka {
          font-size: 18px;
        }
      }
      .profession {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 767px) {
    .name {
      font-size: 60px;
    }
    .top {
      .greetings {
        font-size: 14px;
      }
      .links .link img {
        height: 20px;
      }
    }
    .details {
      .stokerbr-text {
        font-size: 24px;
        &.aka {
          font-size: 14px;
        }
      }
      .profession {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 575px) {
    .name {
      font-size: 50px;
    }
    .top {
      // flex-direction: column-reverse;
      .links {
        // margin-left: 0;
        // margin-bottom: 10px;
        .link img {
          height: 18px;
        }
      }
    }
    .details {
      .stokerbr-text {
        font-size: 22px;
        &.aka {
          font-size: 12px;
        }
      }
      .profession {
        font-size: 18px;
      }
    }
  }
}
</style>
