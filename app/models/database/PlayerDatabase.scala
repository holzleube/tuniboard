
package models.database

import models.PlayerModel
import PlayerModel._
import org.joda.time.LocalDate
import play.api.db.slick.Config.driver.simple._

object PlayerDatabase {
  val player = TableQuery[Player]
}

case class PlayerEntity(id: Int, firstName: String, lastName: String, discipline: String, sex: Int, firstRound: Int, secondRound: Int,
    thirdRound: Int, currentHole: Int)

class Player(tag: Tag) extends Table[PlayerEntity](tag, "player") {
  def id = column[Int]("id",O.PrimaryKey, O.AutoInc)
  def firstName = column[String]("firstName", O.DBType("VARCHAR(100)"))
  def lastName = column[String]("lastName", O.DBType("VARCHAR(100)"))
  def discipline = column[String]("discipline", O.DBType("VARCHAR(100)"))
  def sex = column[Int]("sex", O.DBType("VARCHAR(100)"))
  def firstRound = column[Int]("firstRound", O.DBType("Int"))
  def secondRound = column[Int]("secondRound", O.DBType("Int"))
  def thirdRound = column[Int]("thirdRound", O.DBType("Int"))
  def currentHole = column[Int]("currentHole", O.DBType("Int"))
  def * = (id, firstName, lastName, discipline, sex, firstRound, secondRound, thirdRound, currentHole) <> (PlayerEntity.tupled, PlayerEntity.unapply _)
}

