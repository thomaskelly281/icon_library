import { mdiCastAudioVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CastAudioVariant(props: IconComponentProps) {
  return <Icon path={mdiCastAudioVariant} {...props} />;
}

export { mdiCastAudioVariant as path };
