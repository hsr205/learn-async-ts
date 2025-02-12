const aliceTumbling1: Keyframe[] = [
    {transform: 'rotate(0) scale(1)'},
    {transform: 'rotate(360deg) scale(0)'}
];

const aliceTiming1: KeyframeEffectOptions = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");


async function animateImages(): Promise<void> {

    if (alice10 && alice20 && alice30) {

        const alice10Animation: Animation = await alice10.animate(aliceTumbling1, aliceTiming1).finished
        const alice20Animation: Animation = await alice20.animate(aliceTumbling1, aliceTiming1).finished
        const alice30Animation: Animation = await alice30.animate(aliceTumbling1, aliceTiming1).finished

        const animations = await Promise.all([alice10Animation, alice20Animation, alice30Animation])

        animations.forEach(animation => {
            animation.finish()
        })
    }


}

async function runAnimation(): Promise<void> {
    await animateImages()
}

runAnimation().then(r => {

})


// if(alice10 && alice20 && alice30) {
//   // Promise chain
//   alice10.animate(aliceTumbling1, aliceTiming1).finished
//     .then(() => {
//         return alice20
//                 .animate(aliceTumbling1, aliceTiming1)
//                 .finished;
//     })
//     .then(() => {
//       return alice30
//               .animate(aliceTumbling1, aliceTiming1)
//               .finished;
//     })
//     .catch((err) => alert(`Error when promising ... ${err.message}`));
// }
// else{
//   console.warn("#alice not found");
// }

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  