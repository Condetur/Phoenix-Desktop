package Util;
import java.net.URL;
import java.net.MalformedURLException;
import java.net.URLConnection;
import java.io.IOException;

public class Network {

	public boolean isOnline() {
		boolean isOnline = false; // Assume that we are offline

		try {
			final URL url = new URL("http://www.google.com");
			final URLConnection conn = url.openConnection();
			conn.connect();

			isOnline = true;
		} catch(MalformedURLException e) {

		} catch(IOException e) {

		}

		return isOnline;
	}

}