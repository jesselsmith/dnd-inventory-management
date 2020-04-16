# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_13_222240) do

  create_table "base_items", force: :cascade do |t|
    t.string "name", null: false
    t.string "category", default: "Adventuring Gear", null: false
    t.integer "slots", default: 1, null: false
    t.string "image"
    t.integer "contained_slots", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name", null: false
    t.integer "strength", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "owned_items", force: :cascade do |t|
    t.integer "character_id", null: false
    t.integer "base_item_id", null: false
    t.integer "notches", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["base_item_id"], name: "index_owned_items_on_base_item_id"
    t.index ["character_id"], name: "index_owned_items_on_character_id"
  end

  create_table "slots", force: :cascade do |t|
    t.string "kind", default: "carried", null: false
    t.integer "character_id", null: false
    t.integer "owned_item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_slots_on_character_id"
    t.index ["owned_item_id"], name: "index_slots_on_owned_item_id"
  end

  add_foreign_key "owned_items", "base_items"
  add_foreign_key "owned_items", "characters"
  add_foreign_key "slots", "characters"
  add_foreign_key "slots", "owned_items"
end
