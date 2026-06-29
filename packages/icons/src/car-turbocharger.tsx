import { mdiCarTurbocharger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarTurbocharger(props: IconComponentProps) {
  return <Icon path={mdiCarTurbocharger} {...props} />;
}

export { mdiCarTurbocharger as path };
