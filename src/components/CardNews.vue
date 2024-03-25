<template>
    <v-card class="newsCard" :class="{ 'hovered': modalHovered }" elevation="4" width="100%">
        <div class="contentCard">
            <v-card-title class="titleNews">{{ title ? title : $t('noTitle') }}</v-card-title>
            <div class="subInfo">
                <v-card-subtitle class="authorNews"><strong>{{ $t('author') }}: </strong> {{ author ? author :
        $t('unknownAuthor') }}</v-card-subtitle>
                <v-card-subtitle class="createdNews"><strong>{{ $t('createdAt') }}: </strong> {{ created_at ? created_at
        : $t('unknownCreated_at') }}</v-card-subtitle>
                <v-card-actions>
                    <a :href="url" target="_blank">
                        <v-btn text color="primary" v-if="url">{{ $t('reference') }}</v-btn>
                    </a>
                </v-card-actions>
            </div>
        </div>
        <div class="modalContainer" @mouseover="modalHovered = true" @mouseleave="modalHovered = false">
            <ModalNews :title="title" :text="text" :tags="tags" @close="showModal = false" />
        </div>
    </v-card>
</template>

<script>
import ModalNews from './ModalNews.vue';

export default {
    name: 'NewsCard',
    props: {
        title: String,
        author: String,
        created_at: String,
        url: String,
        text: String,
        tags: Array,
    },
    components: {
        ModalNews
    },
    data() {
        return {
            modalHovered: false
        };
    }

};
</script>

<style scoped>
.newsCard {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.contentCard {
    display: flex;
    flex-direction: column;
}

.subInfo {
    display: flex;
    flex-direction: row;
}

.titleNews {
    font-size: 32px;
    margin: 5px;
    padding: 10px;
}

.authorNews {
    font-size: 18px;
}

.createdNews {
    font-size: 18px;
    margin: 5px;
    padding: 10px;
}

.modalContainer {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 6vw;
}

.hovered {
    background-color: #f0f0f0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

@media (max-width: 970px) {
    .authorNews {
        font-size: 18px;
    }

    .modalContainer {
        padding: 10px;
        width: 100%;
    }

    .newsCard {
        flex-direction: column;
    }

    .subInfo {
        text-align: center;
    }

    .titleNews {
        font-size: 28px;
    }
}
</style>
