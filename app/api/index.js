import { Octokit } from 'octokit';
const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH,
});


export const getLastStarredRepo = async () => {
    let lastStarredRepo = await octokit.request(
        'GET /users/{username}/starred?per_page=1',
        {
            username: 'angel1254mc',
        }
    );

    return lastStarredRepo;
};