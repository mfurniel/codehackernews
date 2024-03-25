<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" width="80vw">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" color="primary" elevation="2" fab icon outlined rounded x-large>
                    <v-icon dark>mdi-arrow-expand</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h4">{{ title || $t('noTitle') }}</span>
                </v-card-title>
                <v-card-text class="textNews" v-dompurify-html="text" v-if="text">
                </v-card-text>
                <v-card-text class="textNews" v-else>
                    {{ $t('noCommentText') }}
                </v-card-text>
                <v-chip-group class="tagsGroup">
                    <v-chip v-for="(tag, i) in tags" :key="i" color="primary" class="ma-2">
                        {{ tag }}
                    </v-chip>
                </v-chip-group>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text x-large @click="dialog = false">
                        {{ $t('exit') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'ModalNews',
    props: {
        title: String,
        text: String,
        tags: Array,
    },
    data() {
        return {
            dialog: false,
        }
    },
}
</script>

<style scoped>
.textNews {
    font-size: 18px;
}

.tagsGroup {
    padding-left: 24px;
}

@media (max-width: 970px) {

    .text-h4 {
        font-size: 18px !important;
        font-weight: 600;
    }

    .textNews {
        font-size: 14px;
    }

    .tagsGroup {
        padding-left: 16px;
    }
}
</style>