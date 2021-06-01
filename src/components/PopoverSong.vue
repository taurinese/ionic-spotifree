<template>
    <IonList>
        <IonListHeader color="light">{{ name }}</IonListHeader>
        <IonItem color="light" button>Accéder à l'artiste</IonItem>
        <IonItem color="light" button>Accéder à l'album</IonItem>
        <IonItem color="light" button>Supprimer de la playlist</IonItem>
        <IonItem color="light" button>Partager</IonItem>
    </IonList>
</template>

<script>
import { IonList, IonListHeader, IonItem } from '@ionic/vue'
    export default {
        name: 'PopoverSong',
        components: {
            IonList,
            IonItem,
            IonListHeader
        },
        props: ['name']
    }
</script>

<style scoped>
/* ion-list{
    background-color: #15202B;
}
ion-item button.item-native{
    background-color: red !important;
} */
</style>