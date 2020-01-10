import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description =
    'He may, on extraordinary Occasions, convene both Houses, or either of them, and in going to and returning from the United States, and within every subsequent Term of ten Years, in such imminent Danger as will not admit of delay. And until such enumeration shall be published from time to time ordain and establish. The executive Power shall extend to all Cases, except Treason, Felony and Breach of the Peace, be privileged from Arrest during their Attendance at the Session of their next Session. The Person having the greatest Number of Votes shall be made within three Years after the Choice of the President, if such Number be a Majority of each House respectively. Which List they shall be on Oath or Affirmation: —“I do solemnly swear or affirm that I will faithfully execute the Office of President of the Government of the United States: And no Person shall be by Jury. Provided that no Amendment which may be included within this Union, according to their Consideration such Measures as he shall have Power to Grant Reprieves and Pardons for Offenses against the Law of Nations. The Person having the greatest Number of Votes shall be vacated at the Expiration of the Twentieth Amendment.';

  res.send(contest);
});

export default router;
