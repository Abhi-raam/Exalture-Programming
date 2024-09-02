function merge(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1

    for (let p = 0; p < m + n; p++) {
        if(nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        }else if (j < 0){
            nums1[k] = nums1[i]
            i--
        }else if (i < 0){
            nums1[k] = nums2[j]
            j--
        }else{
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
}

const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

merge(nums1, m, nums2, n)

console.log(nums1)
