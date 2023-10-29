<script lang="ts">
console.log('My button')

export const otherFn = (param: 1 | 2) => param
</script>

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
