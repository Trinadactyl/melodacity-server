const MelodiesService = {
  getAllMelodies(db) {
    return db
      .from('melodacity_melodies AS melody')
      .select(
        'melody.id',
        'melody.title',
        'melody.content',
        'melody.date_created',
        'melody.user_id'
      )
  },


 //end 
}

module.exports = MelodiesService