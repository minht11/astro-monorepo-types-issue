<script lang="ts" setup>
export interface ButtonProps {
	as: 'button' | 'a' | 'RouterLink'
}

defineProps<ButtonProps>()
</script>

<template>
	<button>
		<slot />
	</button>
</template>
