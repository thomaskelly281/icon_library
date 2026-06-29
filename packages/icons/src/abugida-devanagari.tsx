import { mdiAbugidaDevanagari } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AbugidaDevanagari(props: IconComponentProps) {
  return <Icon path={mdiAbugidaDevanagari} {...props} />;
}

export { mdiAbugidaDevanagari as path };
