#!/usr/bin/env ruby

possible_environment_paths = [
    File.expand_path("../../../../src/config/environment.rb", __FILE__),
    "/usr/share/katello/config/environment.rb"]

environment_path = possible_environment_paths.find { |p| File.exist? p } or
    raise "Katello's config/environment.rb was not found, possibilities were:\n" +
              possible_environment_paths.join("\n")

require environment_path

User.current = User.find_by_username 'admin'
User.find_each { |u| u.save! } # this forces foreman-user creation if he is missing
