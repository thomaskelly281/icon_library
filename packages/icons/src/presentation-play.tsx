import { mdiPresentationPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PresentationPlay(props: IconComponentProps) {
  return <Icon path={mdiPresentationPlay} {...props} />;
}

export { mdiPresentationPlay as path };
