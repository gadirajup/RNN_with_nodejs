import * as tf from '@tensorflow/tfjs';
import * as loader from './loader';
import * as ui from '.ui';

//load our pretrained models
const HOSTED_URLS = {
    model: 'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/model.json',
    metadata: 'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/metadata.json'
};

//translator
class Translator {
    aysnc init(urls) {
        this.urls = urls;
        const model = await loader.loadHostedPretrainedModel(urls.model);
        await this.loadMetadata();
        this.prepareEncoderModel(model);
        this.prepareDecoderModel(model);
        return this;
    }
}
