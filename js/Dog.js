class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    getDefultAppHTML() {
        const {name, avatar, bioHTML} = this;
        return `
            <main style="background-image: url('${avatar}')">
                <div></div>
                <div class="text">
                    <h2 class="name">${name}</h2>
                    <p class="bio">${bioHTML}</p>
                </div>
            </main>
        `
    }

    getLikedAppHTML() {
        const {name, avatar, bioHTML} = this;
        return `
            <main style="background-image: url('${avatar}')">
                <div class="like-sticker"><img class="like-sticker-img" src="images/LIKE.png"></div>
                <div class="text">
                    <h2 class="name">${name}</h2>
                    <p class="bio">${bioHTML}</p>
                </div>
            </main>
        `
    }

    getDislikedAppHTML() {
        const {name, avatar, bioHTML} = this;
        return `
            <main style="background-image: url('${avatar}')">
                <div class="dislike-sticker"><img src="images/NOPE.png"></div>
                <div class="text">
                    <h2 class="name">${name}</h2>
                    <p class="bio">${bioHTML}</p>
                </div>
            </main>
        `
    }
    
}

export default Dog;