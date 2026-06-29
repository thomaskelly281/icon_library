import { mdiCastAudio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CastAudio(props: IconComponentProps) {
  return <Icon path={mdiCastAudio} {...props} />;
}

export { mdiCastAudio as path };
