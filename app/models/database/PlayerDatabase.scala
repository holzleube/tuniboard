
package models.database

import models.PlayerModel
import PlayerModel._
import org.joda.time.LocalDate
import play.api.db.slick.Config.driver.simple._

object PlayerDatabase {
  val player = TableQuery[Player]
}

case class PlayerEntity(id: Int, firstName: String, lastName: String)

class Player(tag: Tag) extends Table[PlayerEntity](tag, "player") {
  def id = column[Int]("id",O.PrimaryKey, O.AutoInc)
  def firstName = column[String]("firstName", O.DBType("VARCHAR(100)"))
  def lastName = column[String]("lastName", O.DBType("VARCHAR(100)"))
  def * = (id, firstName, lastName) <> (PlayerEntity.tupled, PlayerEntity.unapply _)
}

