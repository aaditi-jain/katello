/**
 * @ngdoc service
 * @name  Bastion.docker-tags.factory:DockerTag
 *
 * @requires BastionResource
 *
 * @description
 *   Provides a BastionResource for Docker Tags
 */
angular.module('Bastion.docker-tags').factory('DockerTag',
    ['BastionResource', 'CurrentOrganization', function (BastionResource, CurrentOrganization) {

        return BastionResource('katello/api/v2/docker_tags/:id/',
            {id: '@id', 'organization_id': CurrentOrganization},
            {
                autocomplete: {method: 'GET', isArray: true, params: {id: 'auto_complete_search'}},
                'autocompleteName': {method: 'GET', isArray: false, params: {id: 'auto_complete_name'},
                    transformResponse: function (data) {
                        data = angular.fromJson(data);
                        return {results: data};
                    }
                }
            }
        );

    }]
);
