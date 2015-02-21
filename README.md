### pkgcloud-sync-cli

A command line to to synchronize two cloud storage containers.

#### Supported Providers

- Amazon AWS Simple Storage Service (s3) `amazon`
- HP Cloud `hp`
- Openstack Swift `openstack`
- Rackspace Cloud Files `rackspace`


### Basic Usage
```
pkgcloud-sync --source-type rackspace --source-region dfw --source-key <rackspace-username> --source-secret <rackspace-api-key> --destination-type rackspace --destination-region iad --destination-key <rackspace-username> --destination-secret <rackspace-api-key> --container my-container
```

This will sync all of the contents of container `my-container` from the `DFW` region to the `IAD` region for Rackspace. Subsequent executions of the sync will validate contents before uploading, thus saving significant time.

#### Options

- `source-type` The provider for the source container
- `source-region` A region for the source container, optional (based on provider)
- `source-key` Identifier for the source container credentials
  - For Amazon, this is your access key
  - For Openstack, Rackspace, and HP Cloud provide your username
  - For Google, this is your project ID
- `source-secret` Your secret for your providers credentials
  - For Amazon, this is your secret access key
  - For Openstack and HP Cloud this is your password
  - For Rackspace, this is your API Key
  - For Google, this is the path to your JSON Key file
- `destination-type` The provider for the destination container
- `destination-region` A region for the destination container, optional (based on provider)
- `destination-key` Identifier for the destination container credentials
  - For Amazon, this is your access key
  - For Openstack, Rackspace, and HP Cloud provide your username
  - For Google, this is your project ID
- `destination-secret` Your secret for your providers credentials
  - For Amazon, this is your secret access key
  - For Openstack and HP Cloud this is your password
  - For Rackspace, this is your API Key
  - For Google, this is the path to your JSON Key file
- `container` The container to sync from the source
- `container-suffix` an optional container suffix for the destination container. Some providers require unique names, so this allows you to differentiate.

**It is strongly encouraged to run this from either the source or destination region.**

#### Unsupported Providers

The following providers are unsupported at this time:

- Google Cloud Storage `google`

The Google Cloud Storage provider is somewhat functional, but is not yet fully tested. See [pkgcloud#399](https://github.com/pkgcloud/pkgcloud/issues/399) for more information.



