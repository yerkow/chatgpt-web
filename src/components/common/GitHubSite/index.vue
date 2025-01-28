<script setup lang="ts">
const releaseVersion = import.meta.env.VITE_RELEASE_VERSION || 'v0.0.0'
</script>

<template>
	<div class="text-center text-xs mb-5">
    <span class="text-neutral-400">
      Powered by
    </span>
		<a href="https://foxminded.space" target="_blank">
      <span class="text-blue-500">
        iSpark
      </span>
		</a>
		<span v-text="`${releaseVersion}`"/>
	</div>
</template>
