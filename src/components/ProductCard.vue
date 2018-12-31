<template>
  <div class="card-wrapper">
    <article class="card">

      <!-- Image -->
      <section class="card-image-wrapper">
        <a href="#" @click.prevent="$emit('card-clicked', id)">
          <img :src="listingImageUrl" alt="example" />
        </a>
      </section>

      <!-- Content -->
      <section class="card-content-wrappers">
        <div class="content">
          
          <!-- Description -->
          <div class="content-description">
            <h3 class="product-title">
              <a href="#" @click.prevent="$emit('card-clicked', id)">
                {{displayName}}
              </a>
            </h3>
            <div class="by-line">
              <i>by </i>
              <a :href="authorGithubUrl">
                {{`@${authorGithubUsername}`}}
              </a> in <a href="#">{{ category }}</a>
            </div>
          </div>

          <!-- Actions -->
          <div class="content-actions">
            <div class="cost">
              <span>{{cost > 0 ? `$${cost}` : 'Free'}}</span>
              <a href="#" @click.prevent="showMore = !showMore">{{ showMore ? 'Show less' : 'Show more' }}</a>  
            </div>
            <div class="buttons">
              <SimpleButton>
                <icon-base icon-name="github">
                  <icon-github />
                </icon-base>
              </SimpleButton>
              <SimpleButton name="Buy" type="primary" />
            </div>
          </div>

          <!-- More Details -->
          <div class="content-more" v-show="showMore">
            <div class="last-updated">
              Last updated: {{lastUpdatedDateString}}
            </div>
            <ul class="highlights">
              <li v-for="highlight in highlights">{{ highlight }}</li>
            </ul>
            <section class="tags" v-if="tags.length > 0">
              Tags:<span v-for="(tag, i) in tags">{{`${i > 0 ? ', ': ' '}${tag}`}}</span>
            </section>
          </div>

        </div>
      </section>

    </article>
  </div>
</template>

<script>
import SimpleButton from './SimpleButton.vue'
import IconBase from './IconBase.vue'
import IconGithub from './icons/IconGithub.vue'

export default {
  components: {
    SimpleButton,
    IconBase,
    IconGithub
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    repositoryFullName: {
      type: String,
      required: true
    },
    authorGithubUsername: {
      type: String,
      required: true
    },
    authorGithubUrl: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    lastUpdated: {
      type: String,
      required: true
    },
    highlights: {
      type: Array,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
      // required: true
    },
    cost: {
      type: Number,
      // required: true
      default: 0
    }
  },
  data() {
    return {
      showMore: false
    }
  },
  computed: {
    lastUpdatedDateString() {
      const date = new Date(this.lastUpdated);

      if(date){
        const month = this.getShortMonth(date.getUTCMonth());
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const daySuffix = this.getSuffix(day);

        return `${month} ${day}${daySuffix}, ${year}`;
      }

      return "";
    },
    listingImageUrl() {
      const awsBucket = 'csmarket-listing-assets';
      return `https://s3.us-east-2.amazonaws.com/${awsBucket}/${this.repositoryFullName}/listing.png`;
    }
  },
  methods: {
    getShortMonth(month){
      const months = [
        "Jan.", "Feb.", "Mar.", "Apr.", "May.",
        "June", "July", "Aug.", "Sept.", "Oct.",
        "Nov.", "Dec."
        ];

        return months[month];
    },
    getSuffix(day) {
      let suffix = "th";

      if (day < 11 || day > 20)
      {
        const stringDay = day.toString();
        const endNumber = stringDay[stringDay.length - 1];
        switch (parseInt(endNumber))
        {
          case 1:
            suffix = "st";
            break;
          case 2:
            suffix = "nd";
            break;
          case 3:
            suffix = "rd";
            break;
        }
      }
  
      return suffix;
    }
  },
}
</script>

<style scoped>
  .card-wrapper {
    width: 100%;
    height: 100%;
    min-width: 320px;
    display: flex;
  }

  .card {
    color: #999;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 16px #ccc;
    overflow: hidden;
    margin: 16px;

    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  /*** 
   * Card Image
   */
  .card-image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  img {
    width: 100%;
    transition-duration: .5s;
    transition-property: left;
    z-index: 1;
  }


  /*** 
   * Card Content
   */
  .card-content-wrapper {
    padding: 16px;
    flex-grow: 1;
  }

  .content {
    padding: 16px;
  }

  .content-description {
    height: 48px;
  }

  .content-actions {
    display: flex;
    flex-grow: 1;
  }

  .content-more {
    border-top: 1px solid #f2f2f2;
    padding-top: 16px;
    margin-top: 16px;
  }

  .content-more ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #666;
  }

  .content-more li {
    margin-bottom: 4px;
    list-style-type: none;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 400;
    padding-left: 16px;
    position: relative;
  }

  .content-more li::before {
    content: "\2022 ";
    position: absolute;
    color: #999;
    left: 0;
  }

  .content-more .last-updated {
    line-height: 20px;
    color: #999;
    font-size: 12px;
    padding-bottom: 10px;
  }

  .content-more .tags {
    margin-top: 8px;
    color: #999;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
  }

  .cost {
    flex-grow: 1;
    line-height: 28px;
    color: #4d4d4d;
    font-size: 18px;
    font-weight: 700;
  }

  .cost a {
    display: block;
    padding-top: 2px;
    font-size: 12px;
    text-decoration: none;
    color: #b3b3b3;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .product-title a {
    font-size: 14px;
    color: #4d4d4d;
    max-height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  .by-line,
  .by-line a {
    color: #999;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
    max-height: 18px;
  }

  a {
    font-weight: bold;
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>