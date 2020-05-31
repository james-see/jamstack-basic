const listRepos = async username => {
    const repos = await fetch(
            `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
        )
        .then(res => res.json())
        .catch(error => console.error(error));
    // convert repos into markup strings of list and join into a long string
    const markup = repos
        .map(
            repo => `
    <li>
        <a href="${repo.html_url}">${repo.name}</a>
        (✰ ${repo.stargazers_count})
    </li>`
        )
        .join('');
    // find div we want and put markup in it
    const content = document.getElementById('content');

    content.innerHTML = `<ul>${markup}</ul>`;
}
// define things before I use them
listRepos('jamesacampbell');