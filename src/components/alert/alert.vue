<template>
    <div :class="{'notification-display': overlay}" v-show="alert['visible']" id="v-alert-resource">
        <div :class="alert['alert_class']" role="alert" align="left"  class="vAlert">
            <a role="button" @click="alert['visible']=false" style="cursor: pointer" class="pull-right alert-link">&nbsp;
                &times; </a>
            <span style="font-size:13px;" v-html="message"></span>
        </div>
    </div>
</template>
<script src="./alert.js"></script>
<style src="./alert.css"></style>
