<template>
    <v-list-item link>
        <v-list-item-action>
            <v-icon> {{ iconName }} </v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title> {{ itemTitle }} </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: 'NavBarListItem',

    props: {
        iconName: {
            type: String,
            default: () => 'mdi-alert-circle',
        },

        itemTitle: {
            type: String,
            default: () => 'Error getting item title.',
        },
    }
}
</script>