SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
gcloud run deploy sandbox-spa-adviso --region=us-east1  --project=disco-mountain-228820 --source=$SCRIPT_DIR