const MelodiesService = {
  getAllMelodies(db) {
    return db
      .from('melodacity_melodies AS melody')
      .select(
        'melody.id',
        'melody.title',
        'melody.music_key',
        'melody.tonic',
        'melody.progression',
        'melody.melody',
        'melody.date_created',
        'melody.user_id'
      )
  },
  getUserMelodies(db, userId) {
    return MelodiesService.getAllMelodies(db)
      .where('melody.user_id', userId)
  },
  insertMelody(db, newMelody) {
    return db
    .insert(newMelody)
    .into('melodacity_melodies')
    .returning('*')
    .then(rows => {
      return rows[0]
    })
  },
 //end 
}

module.exports = MelodiesService