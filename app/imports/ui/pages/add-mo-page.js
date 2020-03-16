import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ArchModels } from '../../api/qs/collections.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddMOForm: {
    /**
     * After successful form submission, go to List_MO_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_MO_Page');
    },
  },
});

Template.Add_MO_Page.helpers({
  moCollection() {
    return ArchModels;
  },
  defaultData(){
    return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzNzFweCIgaGVpZ2h0PSI5NnB4IiB2aWV3Qm94PSItMC41IC0wLjUgMzcxIDk2IiBjb250ZW50PSImbHQ7bXhmaWxlIGV0YWc9JnF1b3Q7NTNITW1BS0lpMHEtLWdvMWVQaFYmcXVvdDsgYWdlbnQ9JnF1b3Q7TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTNfMSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgwLjAuMzk4Ny4xMDYgU2FmYXJpLzUzNy4zNiZxdW90OyBtb2RpZmllZD0mcXVvdDsyMDIwLTAyLTI3VDA0OjM1OjA1LjAyNlomcXVvdDsgaG9zdD0mcXVvdDt3d3cuZHJhdy5pbyZxdW90OyB2ZXJzaW9uPSZxdW90OzEyLjcuOCZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtyVXV4dm1hbWROWjF6ckxYT2xfNiZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDt6VlpOYjlzd0RQMDFPWGJ3WitvYzg5VnVRRGNNeldGYmI0cXMyR3BsMFpDVk50bXZIeFhUc1oya1F6TjBiVThXbnloUjVPTWpQQWlueGViYXNETC9DcWxRZzhCTE40TndOZ2dDUDRpRytISEl0a2FpVVZJRG1aRXBPYlhBUXY0V0JIcUVybVVxcXA2akJWQldsbjJRZzlhQzJ4N0dqSUdudnRzS1ZEOXF5VEp4QkN3NFU4Zm9ENW5hdkVhVDJHdnh6MEptZVJQWjkyaW5ZSTB6QVZYT1VuanFRT0Y4RUU0TmdLMVh4V1lxbEN0ZVU1ZHYvdmRaRklTM0Yvck80MWt3bnQ5bDhxSys3T3FjSS9zVWpORDJuNjl1Q0tuc3RxbU5TTEZVWklLeE9XU2dtWnEzNk1UQVdxZkMzZUNoMWZyY0FKUUkrZ2plQzJ1M3hEdGJXMEFvdDRXaVhYeXgyZjUwNXovRmpmbUxydHNaczAzUDJwTDF3cFNwTkJXc0RhZWtMcW5KbU1rRUhSM1ZrRXUzMHhSVXBtc0JoY0RRNkdDRVlsWSs5anVIVVFObWU3KzJ5TGlnT3U5TVdONjdGZzQ4eFpaQzFjZSs2RXhVRmd3OTFQQWFwdndNV09DZ0RqQmV5N0FETmlSZWRoNU8vSGI0eEE0dDNaSkRVWUxlVlc3Q2xNdzBZa3FzbkZtVmpFdWQzZXlzV2VCMVBEZ2VFQWFCUjJHc1JBV05hY002cmljcnFkUVVGR2JpWW9WcExKSTBjamRhQXcraXM1TUV5M0E0eEIxTVRMR3lrc3ZkKy95eldYWHZFSnUvTWthN3dTVTFOdzJwSUNUN3FaWDhYdGg1Uis3TkdEaURaRFNKNTJjNVgwajk4RHA4SngrRzcxWENCZWVuK0Y0bWNSUjdiOHAzSEwwYjM4ZHp0WmxCSDJLdSt2OXRybzZPNTJyeWpuTjFqTlhhWXR0V2xGRlJ2RnhWb3cranFxdXJlVHdhblZMVmREb2NlbStycXNnN1VGWDBDcXFpYUxkSUlOTVo1ckFQRnliOWNQNEpFU2Nub2dVSDBaakNnbXRteGNTSnFqcnFvMzJpTDFBM211MFBYWDI2L1MwTzUzOEEmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHBhdGggZD0iTSAxMDAgNDIgTCAxMjAgNDIgTCAxMjAgNyBMIDE4MCA3IEwgMTgwIDIwLjYzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTgwIDI1Ljg4IEwgMTc2LjUgMTguODggTCAxODAgMjAuNjMgTCAxODMuNSAxOC44OCBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTYgMTcgTCAxMDAgMTcgTCAxMDAgNjcgTCAxNiA2NyBMIDE2IDU4IEwgMCA1OCBMIDAgNDYgTCAxNiA0NiBMIDE2IDM4IEwgMCAzOCBMIDAgMjYgTCAxNiAyNiBaIiBmaWxsPSIjZDVlOGQ0IiBzdHJva2U9IiM4MmIzNjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTYgMjYgTCAzMiAyNiBMIDMyIDM4IEwgMTYgMzggTSAxNiA0NiBMIDMyIDQ2IEwgMzIgNTggTCAxNiA1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODJiMzY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiPjx0ZXh0IHg9IjU5LjUiIHk9IjM0LjUiPkluZ2VzdG9yPC90ZXh0PjwvZz48cGF0aCBkPSJNIDI4NiAxNyBMIDM3MCAxNyBMIDM3MCA2NyBMIDI4NiA2NyBMIDI4NiA1OCBMIDI3MCA1OCBMIDI3MCA0NiBMIDI4NiA0NiBMIDI4NiAzOCBMIDI3MCAzOCBMIDI3MCAyNiBMIDI4NiAyNiBaIiBmaWxsPSIjZjhjZWNjIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMjg2IDI2IEwgMzAyIDI2IEwgMzAyIDM4IEwgMjg2IDM4IE0gMjg2IDQ2IEwgMzAyIDQ2IEwgMzAyIDU4IEwgMjg2IDU4IiBmaWxsPSJub25lIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTJweCI+PHRleHQgeD0iMzI5LjUiIHk9IjM0LjUiPlNpbms8L3RleHQ+PC9nPjxwYXRoIGQ9Ik0gMjMwIDUyIEwgMjUwIDUyIEwgMjUwIDg3IEwgMzIwIDg3IEwgMzIwIDczLjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMzIwIDY4LjEyIEwgMzIzLjUgNzUuMTIgTCAzMjAgNzMuMzcgTCAzMTYuNSA3NS4xMiBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTQ2IDI3IEwgMjMwIDI3IEwgMjMwIDc3IEwgMTQ2IDc3IEwgMTQ2IDY4IEwgMTMwIDY4IEwgMTMwIDU2IEwgMTQ2IDU2IEwgMTQ2IDQ4IEwgMTMwIDQ4IEwgMTMwIDM2IEwgMTQ2IDM2IFoiIGZpbGw9IiNmZmU1OTkiIHN0cm9rZT0iI2NjNjYwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxNDYgMzYgTCAxNjIgMzYgTCAxNjIgNDggTCAxNDYgNDggTSAxNDYgNTYgTCAxNjIgNTYgTCAxNjIgNjggTCAxNDYgNjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjNjYwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMnB4Ij48dGV4dCB4PSIxODkuNSIgeT0iNDQuNSI+QW5hbHl0aWNzPC90ZXh0PjwvZz48L2c+PC9zdmc+";
  }
});
